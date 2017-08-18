from django.shortcuts import render,redirect
from .models import Post

# Create your views here.
def index(request):
    context = {
        'allposts':Post.objects.all()
    }
    return render(request,'ajax_app/index.html',context)


def addpost(request):
    context = {
        'allposts':Post.objects.all()
    }
    if request.method == 'POST':
        print "content", request.POST['note']
        Post.objects.create(post = request.POST['note'])
        return render(request, 'ajax_app/index.html', context)
