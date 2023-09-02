# Flags Icons for React Native

### react-native-ico-flags

260 Vector Icons for React Native

<img src="./static/slovenia.png" alt="slovenia" width="150" height="150"> <img src="./static/puerto-rico.png" alt="puerto-rico" width="150" height="150"> <img src="./static/mozambique.png" alt="mozambique" width="150" height="150">

## List of icons

- [List of Flags Icons](http://ico.simpleness.org/pack/flags)

## Usage

You can use two-letter country codes, based on the ISO 3166-1 alpha-2 standard.

List of codes [here](./src/synonyms)

```
import Icon from 'react-native-ico-flags';


// Inside some view component
render() {
    return (
        <>
          <Icon name="slovenia" />
          <Icon name="puerto-rico" height="40" width="40" />
          <Icon name="MZ" color="red" />
          <Icon name="puerto-rico" badge="10" />
          <Icon name="puerto-rico" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="slovenia" background="circle" />
          <Icon name="SI" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-flags react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-flags react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height background badge ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name or synonym of icon | "slovenia"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
background | no | | background type | "circle"
background | no | | background object | {type: "circle", color: 'yellow'}
badge | no | | badge string | "10"
badge | no | | badge object | {value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}
...rest | no | | other props | style={{backgroundColor: "#00f"}}

### Synonyms of countrues

You can use two-letter country codes, based on the ISO 3166-1 alpha-2 standard.

List of codes [here](./src/synonyms)

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
