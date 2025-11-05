# Grooming Prevention Tool

### [Live here!](https://niallantony.github.io/groomingPrevention/)

## What is it?

An interactive tool, developed in collaboration with researches at Ewha Women's University, to help teach young people with disabilities to recognise and prevent online grooming attempts.

## Tech Stack 

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=svelte, typescript" />
</a>

A very simple stack uses Svelte and SvelteKit to generate a pre-rendered static site. The project did not require anything other than static content delivery, so a light-weight approach was chosen.

## Features

<p align="middle">
  <img src="splash.png" width="200" alt="Splash Screen" />
  <img src="chat.png" width="200" alt="An example chat screen" />
</p>

Users are presented with screens simulating a popular chatting app in South Korea. They are presented with two possible options to choose which leads them through the story tree. 
At the end of the simulation they are presented with a score and some advice about what they could have done better.

<p align="middle">
  <img src="coupon.png" width="200" alt="Splash Screen" />
  <img src="score.png" width="200" alt="An example chat screen" />
</p>

The focus of the project was on simplicity, responsiveness and styling. As a tool targeting people with disabilities the game had to be accessible and easily read. The game was styled with advice from special education researchers, and the game was presented as part of a post-doc thesis.

The story was provided in a document and for consumption by the application this was translated into a tree data structure, with each node containing links to further nodes with dialog options, images to be displayed as either sent or received, and the received text, also with an option indicating terminals which displayed the score and ending message. This data structure can be found in the [library folder](/src/lib)
