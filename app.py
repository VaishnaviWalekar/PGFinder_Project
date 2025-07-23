from flask import Flask, render_template, request
import pandas as pd
import os

# Set the path to your frontend folder where search_results.html exists
template_dir = os.path.abspath('../public')  # Corrected 'public' to 'frontend'
app = Flask(__name__, template_folder=template_dir)

# Load your dataset
pg_data = pd.read_csv("data.csv")

@app.route("/search")
def search():
    city = request.args.get("city", "").strip().title()  # Use lowercase 'city' for the form input name
    results = pg_data[pg_data['City'].str.title() == city]
    return render_template("search_results.html", city=city, results=results.to_dict(orient='records'))

if __name__ == "__main__":
    app.run(debug=True)

    @app.route("/")
    def home():
     return render_template("index.html")  # Your main page with the form