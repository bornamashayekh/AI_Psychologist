import numpy as np
from keras.models import load_model
from sklearn.preprocessing import StandardScaler
import pandas as pd

# بارگذاری داده‌ها و نرمال‌سازی
df = pd.read_csv('dep.csv')
X = df.drop("dep", axis=1)

scaler = StandardScaler()
X = scaler.fit_transform(X)

# بارگذاری مدل از فایل ذخیره‌شده
model = load_model('psychologist_model.h5')

# تابع پیش‌بینی
def predict(input_data):
    input_data = np.array(input_data).reshape(1, -1)
    input_data = scaler.transform(input_data)
    prediction = model.predict(input_data)
    return prediction[0]
