import pandas as pd
import numpy as np
import re

TFIDF = pd.read_pickle('TFIDF_Model.pk')


class Model:
    def __init__(self):
        self.tfidf = TFIDF

    def predict(self, texts):
        df = pd.DataFrame(texts)
        y_tfidf = self.tfidf.transform(df.iloc[:, 1])
        pred = np.array(y_tfidf.argmax(axis=1))
        pred_labels = np.array(
            [list(self.tfidf.vocabulary_.keys())[list(self.tfidf.vocabulary_.values()).index(x)] for x in
             pred])
        df['labels'] = pred_labels
        return df.values


def main():
    data = pd.read_csv('joined_dataset.csv')
    Xy = data[['summary', 'category']].dropna()
    X = pd.DataFrame(np.arange(Xy.shape[0]))
    X['desc'], y = Xy['summary'], Xy['category']
    # Remove punctuation
    X = X.dropna(subset=['desc'])
    X['desc'] = X['desc'].map(lambda x: re.sub(r'[,\.!?]', '', x))
    # Convert the titles to lowercase
    X['desc'] = X['desc'].map(lambda x: x.lower())

    model = Model()
    print(model.predict(X.values))


if __name__ == '__main__':
    main()

