+++
title = "Hello (Hu)go!"
description = "Playing with Hugo"
date = "2017-10-23"
tags = [
    "golang",
    "hugo"
]
categories = [
    "development",
    "golang",
]
menu = "main"
+++

# Hello Hugo!

Playing with Hugo, a static site generator. This is a demo post with tags & categories.

## Basic Syntax

Go lang templates are html files with the addition of variables and
functions.

**Go variables and functions are accessible within `{{ }}`**

Accessing a predefined variable `foo`:

    {{ foo }}

**Parameters are separated using spaces**

Calling the add function with input of 1, 2:

    {{ add 1 2 }}

**Methods and fields are accessed via dot notation**

Accessing the Page Parameter `bar`

    {{ .Params.bar }}

**Parentheses can be used to group items together**

    {{ if or (isset .Params "alt") (isset .Params "caption") }} Caption {{ end }}

## Variables

Each go template has a struct (object) made available to it. In hugo each
template is passed either a page or a node struct depending on which type of
page you are rendering. More details are available on the variables page.

A variable is accessed by referencing the variable name.

    <title>{{ .Title }}</title>

Variables can also be defined and referenced.

    {{ $address := "123 Main St."}}
    {{ $address }}
 