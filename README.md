# grunt-html2jsx

> Convert HTML files to JSX

This plugin use the react-magic htmltojsx module.

(see https://github.com/reactjs/react-magic/blob/master/README-htmltojsx.md)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html2jsx --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2jsx');
```

## The "html2jsx" task

### Overview
In your project's Gruntfile, add a section named `html2jsx` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2jsx: {
    defaultOptions: {
      src: '',
      dest: ''
    }
  },
});
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  html2jsx: {
    defaultOptions: {
      src: 'src/views/*.html',
      dest: '.tmp/templates.jsx'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
