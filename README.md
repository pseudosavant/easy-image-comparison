# Easy image comparison example

This is a simple project to show how to do a dynamic image comparison
where there are 2 images with one overlayed on the other. It will change
the split as you hover your mouse cursor over the image.

## How to use

Using it is as simple as creating an `<image-comparison>` element and
setting `--image1` and `--image2` in the element's style, and setting
the `<img>` to the same sources as `--image1`;

## Example

```html
<image-comparison
  style="--image1: url('https://loremflickr.com/640/480/dogs/'); --image2: url('https://loremflickr.com/640/480/cats/');">
  <img src="https://loremflickr.com/640/480/dogs/">
</image-comparison>
```

License: MIT

&copy;2020 Paul Ellis