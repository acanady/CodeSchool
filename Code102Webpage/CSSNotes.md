### Three ways to insert CSS
* Internal
* External
* Inline

### Internal CSS Example
```
<style>
    h1 {
        color: yellow; <--- css rule
        text-align: right;
    }
</style>
```

### External CSS
**External CSS* requires what? 
It requires a link to some style.css file

```
<link rel="stylesheet" href="style.css">
```

### Inline CSS
**Inline CSS* where does it go?
* In the html directly
* It's an attribute for the element that you want to style

```
<p style="color: red; text-align:center">
```

## CSS Selectors

* class selector
* id selector
* element selector
* universal selector

### The class selector
**multiple html elements can be part of the same class**
```
.highlight {
    background-color: yellow;
    text-align: center;
}

In the html file
<p class = "highlight">Hello  World</p>
<h1 class = "highlight">Hello World</h1>
```

### The ID selector
**every ID must be unique and assigned to at most 1 element**

```
#highlight {
    background-color: yellow;
    text-align: center;
}

In the html file
<p id="highlight">Hello World</p>
```

### Element Selector
**An element selector works by selecting the specific html element you want to style**

```
p,  h1, h2, h3, h4, h5 {
    background-color: yellow;
    text-align: center;
}
```

### Universal Selector
**Selects every single element on the webpage**

```
* {
    margin: 0;
}
```

### What are the CSS Selectors?
  * Universal
  ```
  * {
    margin: 0;
  }
  ```
  * Class Selector
  ```
  .myclassname{
    color:yellow;
  }
  ```
  Make sure that your class names make sense, they should tell you something about what the class does or what it's used for
  * Element Selector
  ```
    p{
      float:left;
    }
  ```
  * ID Selector
  ```
    #username{
      font-type: Helvetica, sans-serif;
    }
  ```