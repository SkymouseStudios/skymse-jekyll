---
episode: 029
layout: post
author: Patrick Hanus
title: "How to make your website wicked fast"
subtitle: "Understand a speed test, fix your website, and rank higher on Google."
description: "In this article, I'm going to show you why your site is slow, how to understand a speed test report, and what to do in order to speed up your site."
permalink: "/blog/how-to-make-your-website-faster/"
img: "/uploads/029-make-it-fast-web-min.png"
ttr: "12"
categories:
- content

---

## Why Having a Fast Website Is Important

In this article, I'm going to show you why your site is slow, how to understand a speed test report, and what to do in order to speed up your site. I'm a huge advocate for making your website fast because **it's not hard** to do and has massive benefits.

### User experience (UX) is made better

Your guiding principal with any website should be: Can my users get what they need as quickly and easily as possible? Users who can find what they need are happy users, and happy users lead to happy customers.

### It's a huge Search Engine Optimization (SEO) factor

If you're site is not loading quickly, that's going to dock your website when competing for the front page of search engines. Google makes it very clear that load-times are a part of ranking factors, so don't let this low-hanging fruit go to waste.

### If you don't, you will lose 70% of your potential audience

If your website doesn’t load faster than 3 seconds [you’ve already lost 70% of your audience.](https://skymousestudios.com/blog/11-website-statistics-that-actually-matter#83-of-people-expect-a-website-to-load-in-3-seconds-or-less) This should be a wake-up call. A slow site is a site that no one visits. People have very little patience so the last thing they need is a deterrent keeping them from your site. 

* TOC
{:toc}

## Common Problems With Website Speed

### How to identify a slow site

There are plenty of free tools you can use to check page load speed. Don't pay for it! The free tools work great! The important thing to know is how to use the tool and how to read the results. Three of my favorite tools are [https://tools.pingdom.com/](https://tools.pingdom.com/), [https://webpagetest.org](https://webpagetest.org/), and [GTmetrix.com](https://gtmetrix.com). You could also test your site right from Google Chrome's Lighthouse in the developer tools section. But, for most people using something like Pingdom or GTmetrix is probably the best bet.

`Important note about speed tests`

Many speed-test sites will give you a letter grade. Sometimes they will give a bad letter grade, despite the site being wicked fast. Take [SkymouseStudios.com](http://skymousestudios.com) for example, it loads in 970ms, which is very fast, yet it ends up with a "C" from Pingdom because we don't do things exactly the way they want us to. The point is, try to get your site to load in 3 seconds or less, don't worry so much about the letter grade.

<img class="blog-image-mid" src="/uploads/029-pingdome-letter-score-min.png" alt="pingdom letter score screenshot">

#### Wordpress Plugins might also be a culprit

If you have a site that is a couple years old, it's very likely there are a bunch of plugins on your site that you aren't even using anymore. Many of them add additional scripts that slow down your site-load time for users, as well as the load time in the Wordpress interface for your team. It's a good practice to `Deactivate` plugins that you are no longer using.

#### How's your Hosting Server?

There are a couple stages to loading a website. Here's a very rough breakdown of how things happen when you hit "enter," after typing in a website in your web browser.

1. The first stage is when your web browser (i.e. Chrome or Firefox) requests the website from your server. This takes 300 milliseconds or more, depending on how fast your server is.
2. In the second stage, the server sends the information to your web browser. This takes a certain amount of time based on a couple things as well.
    1. How big the size of the page is, this includes pictures, videos, styles etc.
    2. How many requests the page makes to other resources like Google fonts, Drift, Mailchimp—basically any script, iframe or resource that is coming from a different server than the server that your website is hosted at.

Whether you're paying for Godaddy or Bluehost, your server takes time to send the requested information to your user's browser. Especially if you're paying for budget hosting, ($15/month or less) your server load times will not always be great and sometimes pretty slow if there is an uptick in overall website traffic. 

Cheap hosting can be slow becuase you're sharing the same server with a bunch of other users. 

> So if a fellow cheap hosting user has a flash sale on their handmade pumpkin-flavored mugs, their increase in traffic will affect *your* site.

According to Moz, [the optimal server response time is under 200ms](https://moz.com/learn/seo/page-speed), but if you're under 500ms you should be good to go. Below you can see the response time in the second row of thing Pingdom report.

<img class="blog-image-mid" src="/uploads/029-pingdom-timeline-min.png" alt="">

---

`Related:` [A Guide to Building Your Own Website]({% post_url 2020-05-19-build-your-own-website %})

---

### Understand what is making your site slow

There are a lot of confusing options when looking at a speed-test report, so here are some of the top issues you should be concerned about.

<img class="blog-screenshot" src="/uploads/029-gtmetrix-speed-test-example-min.png" alt="">

#### Defer Javascript

Javascript is a programming language of sorts that runs in browsers. It helps do things like track users, add cool effects when you hover, or enable a dark mode while you're reading a blog. Especially if you have a lot of Javascript, **it can slow down your site** because your browser is busy trying to load EVERYTHING before it shows you what the page looks like.

When a speed test tells you you need to "Defer Javascript" this means that the web browser loads the Javascript code before the rest of the page is shown. Many times, the page does not actually need the Javascript in order to show the page. When you `defer` the Javascript, you are tell the code to load after everything else has loaded.

If you tell the code to load `async` that means your telling the code it can load a the same time, without blocking the rest of the page from loading.

#### Serve scaled images / Optimize images

Scaled images doesn't mean pictures of fish. This means images are far bigger than they need to be. For most websites, a general rule of thumb is keeping individual images below 1000 KB each, and that would be for large images.

#### Avoid bad requests

Make sure all your resources are showing up. If an image or Javascript doesn't load, the web browser will waste time trying to find where it is.

#### Too many requests

Another big cause of slow sites is the amount of tracking codes people put on their site. Drift, Intercom, MailChimp, Google Analytics, Google Fonts, Facebook Pixel, AdRoll—they can all start to add up. Each one of these added features has an associated load time, so be sure you want it and don't add it for no reason.

#### Minify Javascript/CSS

When JS or CSS is minified, all the blank spaces and new lines are removed from the code. 

```css
/* So something like this: */
.red {
	background-color: red;
	font-size: 12px;
}

/* Would look like this: */

.red{background-color: red;font-size: 12px;}
```

This might seem trivial, but every little bit counts. The more small improvements you see, the faster you're overall load-time will be.

#### Add expires headers

GTmetrix's site states that "expires headers tell the browser whether they should request a specific file from the server or whether they should grab it from the browser's cache."

Caching is like your browser's long-term memory. Let's say you're using Google Chrome as your browser—it will store images and files from the websites you visit, in order to make the site load faster the next time you visit the site.

Expires headers tell your browser what to keep cached and how long to keep it. Some things you want the browser to keep a long time, like the things that won't change such as logos and CSS. For other things that change on a regular basis, you'll want to make sure it doesn't keep information cached in the browser for longer than a week.

## How To Speed Up a Slow Website

### Speeding up media issues

Media is the first thing your should check. Chances are your page size is large, which means it's going to take a while for all the images or vides to load on the site. 

#### Check your dimensions

The number one thing I see people do is upload images straight from Pexels or Unsplash to their website at 5000px wide. This is wayyyy to big. Most computer screens are 4 times smaller. You can check to see how big you image is by checking it's properties in finder. You can access this by selecting the image first and then going to `File > Get Info` (Or pressing  `Command + i`)

<img class="blog-image-mid" src="/uploads/029-dimensions-info-min.png" alt="">

The best way to fix this is cropping the image BEFORE you upload it. 

- Most smaller images in the blog post don't need to be bigger than `600px` wide.
- If it's a header image it doesn't need to be bigger than `1200px` wide.

<img class="blog-image-mid" src="/uploads/029-dimensions-resize-options-min.png" alt="">

**Psst**. Now would also be a great time to name your images based on what they are and not some lousy name like `Screen Shot 2020-08-06 at 16.51.57.png` It's bad UX, and it's bad for SEO!

#### Optimize your images

There are plenty of apps online that will help you optimize your images. You can also add plugins that will optimize your images for you. The big issue with this is that it will put a load on your server, especially if you have a lot of images and not a powerful server.

There are also plenty of online tools that will help you make your images smaller. Check out [https://imagecompressor.com/](https://imagecompressor.com/). It's a free image compressing tool. It has a preview and you can bulk upload photos. (I used it to optimize the images for this post!)

Note the size column and how I'm able to slash the size by 70% on a lot of these.

#### Before Compression

<img class="blog-image-mid" src="/uploads/029-size-before.png" alt="">

#### After Compression

<img class="blog-image-mid" src="/uploads/029-compression-size-after.png" alt="">

#### Lazy-load images

This might sounds slow, but it's actually great for speeding up images, especially if you have a lot on your webpage. Lazy-loading images means that the image is loaded only when it's within view. So if you have 20 images throughout a page, only the first three at the top load, while the rest wait until you scroll down to their section. At that point, they will fade onto screen.

This effect is handled by Javascript that tells the browser when to load images. If you're using WordPress, there are a couple of plugins that will help you do this for free.

#### Be careful with video and animated GIFs

Video and GIFs can use a lot of bandwidth resources, so if you use them, make sure they are NOT wildy large files. People don't expect to see 4k clear and crisp video or images on *most* websites. Usually they are trying to get somewhere and do something, so they don't mind a mild exchange of speed for image quality.

### Javascript issues

The first thing I would recommend when you experience issues is removing any unnecessary Javascript. Depending on your website, chances are you are probably using more than you need to. This starts with removing excessive analytics tools and disabling any extra plugins.

If you're the technical type, or you've manually added Javascript to your site somewhere, make sure you add `defer` and/or `async` attributes to your code. Any resource that stops your website from loading quickly is called "render blocking." [There's more on fixing render blocking resources here.](https://web.dev/render-blocking-resources/)

<img class="blog-image-mid" src="/uploads/029-javascript-async-defer-min.png" alt="">

If you're not as technical and using Wordpress, the best bet is probably to add a plugin. [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) has worked pretty well for me in the past when I'm on the go. It's also going to help you with a bunch of other speed tricks, such as "minification" and caching.

It's good to be aware that some optimization plugins can interfere with other features of your site. Test your site after you've enabled a new plugin, to make sure it's still working right.

### Leverage browser caching

Implementing proper [cache control headers](https://gtmetrix.com/leverage-browser-caching.html) can have one of the biggest impacts for your users. This can get kind of technical if you're not using a plugin with Wordpress, so I'm going to assume you'll use something like [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) to handle these changes for you. 

<img class="blog-screenshot" src="/uploads/029-w3-total-cache-browser-cache-options-min.png" alt="">

### Adding a CDN

A CDN is a "Content-Delivery-Network." It's basically spreading your site over a few servers across the world, instead of it being at just one server. When a user loads your website, the server closest to their location is the one that sends them the site.

Using a CDN is pretty easy, many hosts offer it as a free or additional service of using their platform. That being said, unless you have users all over the world that are trying to access your site, I wouldn't worry too much about adding a CDN until it's absolutely necessary.

## Be consistent with your optimizing

Making your website faster is a great investment. The first thing to do is **start with the homepage**. Most of your users will end up there at some point. Next, use your analytics to find out which pages are visited the most and which pages are loading extra slow.

Take it a page at a time. Test it using the tools we discussed and make sure there are processes in place to ensure people uploading images that are the right size.

By systematically optimizing each page, you'll have a wicked fast site in no time!
