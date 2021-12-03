from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route("https://clayton-smith-capstone-project.herokuapp.com/")
def index():
    return render_template('index.html')


@app.route("https://clayton-smith-capstone-project.herokuapp.com/blog")
def blog():
    return render_template('post_list.html')


@app.route("https://clayton-smith-capstone-project.herokuapp.com/blog/post/<slug>")
def blog_post(slug):
    return render_template('post.html', slug=slug)


@app.route("https://clayton-smith-capstone-project.herokuapp.com/admin/post/create")
def admin_post_create():
    return render_template('admin_post_create.html')


@app.route("https://clayton-smith-capstone-project.herokuapp.com/admin/post/update/<slug>")
def admin_post_update(slug):
    return render_template('admin_post_update.html', slug=slug)


@app.route("https://clayton-smith-capstone-project.herokuapp.com/admin/post/list")
def admin_post_list():
    return render_template('admin_post_list.html')


if __name__ == '__main__':
    app.run(debug=True, port=8081)
