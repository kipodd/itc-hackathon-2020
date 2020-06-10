import pandas as pd
import numpy as np
import re
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import tensorflow as tf
# TFIDF = pd.read_pickle('TFIDF_Model.pk')
LSTM_PATH = 'model.h5'


# class Model:
#     def __init__(self):
#         # self.tfidf = TFIDF
#         self.path = LSTM_PATH
#
#     def predict(self, texts):
#
#         df = pd.DataFrame(texts)
#         y_tfidf = self.tfidf.transform(df.iloc[:, 1])
#         pred = np.array(y_tfidf.argmax(axis=1))
#         pred_labels = np.array(
#             [list(self.tfidf.vocabulary_.keys())[list(self.tfidf.vocabulary_.values()).index(x)] for x in
#              pred])
#         df['labels'] = pred_labels
#         return df.values

def _get_sequences(texts, tokenizer):
    seqs = tokenizer.texts_to_sequences(texts)
    return pad_sequences(seqs, maxlen=30,
                         value=0, padding='post', truncating='post')


class Model:
    def __init__(self):
        # self.tfidf = TFIDF
        self.path = LSTM_PATH

    def predict(self, texts):
        df = pd.DataFrame(texts, columns=['id', 'summary'])
        Xy = df[['id', 'summary']].dropna()
        X = Xy['summary']
        # Remove punctuation
        X = X.map(lambda x: re.sub('[,\.!?]', '', x))

        # Convert the titles to lowercase
        X = X.map(lambda x: x.lower())
        word_set = set()
        for s in X:
            word_set |= set(s.split())
        tokenizer = Tokenizer(num_words=len(word_set) + 1, filters='!"#$%&()*+,-.:;=?@[\\]^_`{|}~\t\n', lower=True,
                              split=' ', oov_token="UNK")
        tokenizer.fit_on_texts(X)
        label_dict = {0: 'Emergency Preparedness',
                      1: 'Education',
                         2: 'Helping Neighbors in Need',
                         3: 'Communities and Neighbors',
                         4: 'Health and Well-Being',
                         5: 'Health',
                         6: 'Economic and Workforce Development',
                         7: 'Emergency Preparedness and Response',
                         8: 'Strengthening Communities',
                         9: 'Environment'}
        X_train = _get_sequences(X, tokenizer)
        model = tf.keras.models.load_model(self.path)
        pred = model.predict(X_train).argmax(axis=1)
        labels = np.array([label_dict[p] for p in pred])
        Xy['labels'] = labels
        return Xy.values


def main():
    data = pd.read_csv('joined_dataset_full.csv')
    # Xy = data[['summary', 'category']].dropna()
    # X = pd.DataFrame(np.arange(Xy.shape[0]))
    # X['desc'], y = Xy['summary'], Xy['category']
    # # Remove punctuation
    # X = X.dropna(subset=['desc'])
    # X['desc'] = X['desc'].map(lambda x: re.sub(r'[,\.!?]', '', x))
    # # Convert the titles to lowercase
    # X['desc'] = X['desc'].map(lambda x: x.lower())
    Xy = data[['summary', 'category']].dropna()
    X = pd.DataFrame(np.arange(Xy.shape[0]))
    X['summary'] = Xy['summary']
    model = Model()
    print(model.predict(X.values))


if __name__ == '__main__':
    main()

