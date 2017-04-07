# Blogger Template
this is a my custom script to build blogger template easily


<font color="red">**Please keep in mind this project still in development and unstable**</font>

Currently no document so you must read the code and understand by yourself


### Comewith
- Pug
- Less
- Gulp (task manager) 

## How to use
Create your template folder in templates folder
```/templates/YourTemplateName/```

each template must have ```index.pug``` to be a main file template (gulp with build template from this file)

<font color="red">```main.js``` still in working process to make it possible to render template in local</font>

## Command
- ```npm run export``` or ```gulp export``` export all template
- ```gulp export --template [template name]``` or ```gulp export -t [template name]``` export specific template
- You can use ```--minify``` to minify your export result


## License
MIT