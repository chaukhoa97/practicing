Source: https://www.greatfrontend.com/questions/user-interface/image-carousel?format=user-interface

## Layout and positioning

- The image carousel should be centered on the screen with a maximum size of 600px by 400px.
- Images should shrink to fit within the carousel so that the entire image is visible. Empty parts of the carousel can be filled with black.

## Navigation

- Add left/right navigation buttons to allow the user to navigate through the images. The buttons should allow a cycling behavior, i.e. after the last image, the image cycles back to the first.
- Add page buttons at the bottom to directly jump to an image. You may assume there will be fewer than 10 images.

## Follow up

- Transition Animation: Recommend to render all the images in a horizontal row within a container and manipulate the horizontal offset of the container to achieve the transitions.
- Performance: There should only be a maximum of two image elements in the DOM at any one time.

![alt text](image.png)

## Starter Code

```jsx
import ImageCarousel from './ImageCarousel'

const IMAGES = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
]

export default function ImageCarousel({ images = IMAGES }) {
  return (
    <div className="carousel-images">
      {images.map(({ alt, src }) => (
        <img key={src} alt={alt} src={src} width="100%" />
      ))}
    </div>
  )
}

const changeSlide = (index) => {
  document.querySelector('.carousel-images').scrollTo({
    left: index * 600,
    behavior: 'smooth',
  })
}
```
