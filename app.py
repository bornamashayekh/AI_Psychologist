from flask import Flask, request, jsonify, render_template
from model import predict  # وارد کردن تابع پیش‌بینی از model.py

app = Flask(__name__)

@app.route('/')
def index_fa():
    return render_template('index.html')  # Notice the 'fa/' path here

# Route for English template
@app.route('/en')
def index_en():
    return render_template('en/index.html')  

@app.route('/predict', methods=['POST'])
def predict_route():
    data = request.json['data']  # دریافت داده‌ها از درخواست AJAX
    prediction = predict(data)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)

app.config['TEMPLATES_AUTO_RELOAD'] = True
