from flask import Flask
from flask import render_template
from flask_assets import Environment, Bundle
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('scss/main.scss', filters='pyscss', output='css/main.css')
assets.register('scss_all', scss)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/blog")
def blog():
    return render_template('post_list.html')


@app.route("/blog/post/<slug>")
def blog_post(slug):
    return render_template('post.html', slug=slug)


@app.route("/admin/post/create")
def admin_post_create():
    return render_template('admin_post_create.html')


@app.route("/admin/post/update/<slug>")
def admin_post_update(slug):
    return render_template('admin_post_update.html', slug=slug)


@app.route("/admin/post/list")
def admin_post_list():
    return render_template('admin_post_list.html')


if __name__ == '__main__':
    app.run(debug=True)
