# Headery
Headery is a header with a dropdown navigation menu. When a navigation's item is clicked the whole header drops down to reveal the sub-menu corresponding to this item.

## Requirements
- [jQuery](http://jquery.com/)

## Usage
1. Download the [packaged source file](https://github.com/louisfisch/headery/archive/master.zip), this includes everything you need to get Headery running on your site.

2. Add the file headery.css in your `<head>` and the file headery.min.js before `</html>`

3. Add the sub-menu and trigger-link classes as follows :
```html
<header>
  <h1><a href="#">Title</a></h1>
  <nav>
    <ul>
      <li class="trigger-link">
        <a href="#">Menu</a>
        <ul  class="sub-menu">
          <li><a href="#">A link</a></li>
          <li><a href="#">Another link</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</header>
```

## Browser Compatibility
| Desktop       |
| ------------- |
| Google Chrome |
| Safari        |
| Firefox       |
| Opera         |

It has not been tested on Internet Explorer yet.

## Want to contribute?
This is just a start. Please feel free to fork and pull requests!
