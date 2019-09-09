# Kubeswitch - Simple Node cli for K8s contexts

Kubeswitch is a CLI application that helps you switch kubernetes contexts while keeping all your config clean.

## Why?

Managing kubernetes contexts can get pretty messy because the context keys often changes on your hosting providers for security purposes.

## Requirements
- Node 10+
- Credentials for your kubernetes hosting platform

## Getting Started

```shell
$ yarn global add kubeswitch
$ kubeswitch add
Then follow the instructions...
```

## Overview

### Help
Specifically use `kubeswitch --help` if you want to see the commands help because `kubeswitch` alone defaults to `kubeswitch switch` for convenicence.

### Add
Clear your environment so you're ready to use kubeswitch.

### Remove
Remove one or more selected contexts from your environment.

### Save 
Save a context under a chosen name.

### Switch
Switch to the selected context. (This command is the default command if you don't pass any options to kubeswitch)

```shell
$ kubeswitch
$ kubeswitch switch
```
Those two commands do the same thing.