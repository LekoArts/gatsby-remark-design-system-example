# Design System created with Gatsby
Use the specimens of [gatsby-remark-design-system](https://github.com/LeKoArts/gatsby-remark-design-system) to build your own styleguide or design system!  
Read the complete [README](https://github.com/LeKoArts/gatsby-remark-design-system) to see all options & examples in detail.

[![GitHub license](https://img.shields.io/github/license/LeKoArts/gatsby-remark-design-system.svg?style=flat-square)](https://github.com/LeKoArts/gatsby-remark-design-system/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/gatsby-remark-design-system.svg?style=flat-square)](https://www.npmjs.org/package/gatsby-remark-design-system)
[![LekoArts Homepage](https://img.shields.io/badge/lekoarts-homepage-blue.svg?style=flat-square)](https://www.lekoarts.de)

## Audio

If your brand has specific sounds for notifications or other sound signatures you can include them with the **Audio** specimen.

**Options**

`autoplay: boolean` Default: false  
`loop: boolean` Default: false  
`name: string`  
`span: number[1-6]` Width of the specimen  
`src: string` The path/url to the file. Needs to be in quotes

**Example**

````
```audio
span: 3
name: Sound File #1
src: "/sound.mp3"
```

```audio
span: 3
name: Sound File #2
src: "/sound.mp3"
```
````

**Live Example**

```audio
span: 3
name: Sound File #1
src: "/sound.mp3"
```

```audio
span: 3
name: Sound File #2
src: "/sound.mp3"
```

## Color

The colors of your brand. The swatches also include checks on the accessibility (AA). It checks black/white + small/large on your color. The **Color** specimen has a fixed width of 300px.

**Options**

`color: string` Define the color (in HEX, e.g. #b0f6ff)  
`name: string`

**Example**

````
```color
name: Light Blue
color: #b0f6ff
```

```color
name: Smaragd
color: #939d7b
```
````

**Live Example**

```color
name: Light Blue
color: #b0f6ff
```

```color
name: Smaragd
color: #939d7b
```

## Color-Palette

A sequence of colors showing different shades. The **Color-Palette** also converts the input HEX color to RGB.

**Options**

`name: string, color: string`  
Each line represents a color. First define the name then after a comma the HEX value

**Example**

````
```color-palette
T400 - Shabby, #448c6c
T300 - Legendary, #dca114
T200 - Smoke, #6c3b0b
```
````

**Live Example**

```color-palette
T400 - Shabby, #448c6c
T300 - Legendary, #dca114
T200 - Smoke, #6c3b0b
```

## Download

To link your logos and other resources you can use the **Download** specimen. You can also show a preview of the file.

**Options**

`color: string` Define the background color (in HEX, e.g. white) of the preview box  
`image: boolean` If true the image will be shown below  
`span: number[1-6]` Width of the specimen  
`src: string` The path/url to the file. Needs to be in quotes  
`subtitle: string` The filesize or other information   
`title: string`  
`width: string` The width of the preview image (default: 200px)

**Example**

````
```download
color: white
image: true
span: 3
src: "/logo.png"
subtitle: 8KB
title: Avatar Social
width: 250px
```
````

**Live Example**

```download
title: Avatar Social
subtitle: 8 KB
src: "/logo.png"
span: 3
color: white
image: true
```

## Example

Insert your HTML code and see a live preview above the code sample.

**Options**

None

**Example**

````
```example
<button>You can insert your HTML here</button>
```
````

**Live Example**

```example
<button>You can insert your HTML here</button>
```

## Hint

Do give neutral hints or when talking about Dos & Don'ts you can use the **Hint** specimen.

**Options**

`directive` Green, positive note for showing Dos  
`warning` Red, warning note for showing Don'ts  
`neutral` Neutral note (Default)

**Example**

````
```hint|directive
Make it so!
```

```hint
Neutral Hint
```

```hint|warning
nooooooooo, not this way
```
````

**Live Example**

```hint|directive
Make it so!
```

```hint
Neutral Hint
```

```hint|warning
nooooooooo, not this way
```

## Typography

You can use the **Typography** specimen to keep the numbers of different styles across the sites to a minimum.

**Options**

`size: number|weight: number|metrics: string|weightDesc: string|usage: string`  
Each line represents a type. You have to define the values in the mentioned order and seperate with `|`

**Example**

````
```typography
42|700|Display|42, line height is 1.1x|Bold, 700|Display type is used for visual impact and emphasis
32|400|Page title|32, line height is 1.1x|Normal, 400|Page title is used to provide hiearchy
```
````

**Live Example**

```typography
42|700|Display|42, line height is 1.1x|Bold, 700|Display type is used for visual impact and emphasis
32|400|Page title|32, line height is 1.1x|Normal, 400|Page title is used to provide hiearchy.
```

## Video

You can use the **Video** specimen to include intros or other videos.

**Options**

`autoplay: boolean` Default: false  
`loop: boolean` Default: false  
`muted: boolean` Default: false  
`name: string`  
`src: string` The path/url to the file. Needs to be in quotes  

**Example**

````
```video
autoplay: false
loop: false
muted: false
name: Animation Video
src: "https://www.w3schools.com/html/mov_bbb.mp4"
span: 3
```
````

**Live Example**

```video
name: Animation Video
src: "https://www.w3schools.com/html/mov_bbb.mp4"
span: 3
```