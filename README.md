# **Highlight Searched text:**

Create a React.js app with a fixed text and a input element. Whenever we write something in the input field. If that text are presented in the below text it will highlight them.

## **How App Works?**

The app have input field and text paragraph. I put a `Event Listener` on input field **onChange**. Whenenver the change occured in the text field. The `onChange` event triggers. and invoked the `handleChange` function.

The function grab the value of the input field and also have the DOM refernce of the text paragraph. If the input value are found in the paragraph below. It will simple `replace` the text with `<span style="background: yellow">${value}</span>`.

One thing to Note, If we put `replace` method then it will replace on the first occurence of the text. But if we put `replaceAll` method it will replace all the occurance of the input field in the paragraph.

**Visit to the site:** [Click here](https://advice-reactjs-app.netlify.app/)

## **App View:**

![Website View](/src/images/website-view-1.PNG)

![Website View](/src/images/website-view-2.PNG)
![Website View](/src/images/website-view-3.PNG)
