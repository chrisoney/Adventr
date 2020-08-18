### Live website

[Click here](https://adventr-app.herokuapp.com/#/) to check out Adventr!

-------------------------------------------

# Adventr
<img src="./app/assets/images/gifs/log-in.gif" width=800 height=auto>

-------------------------------------------

## Table of Contents
1. Introduction
2. Features
3. Technologies

-------------------------------------------

### Introduction
Adventr is a content-focused blog site inspired by tumblr, but with a tabletop fantasy twist. Adventr allows users to post quests or quest-related content and find similar content that they enjoy. Quest content can be shared in a variety of ways: text, quotes, images, videos, and audio clips.

-------------------------------------------

### Features

* Interactive ways to create and share quests
* Pages to discover new quests created by other users
* Ways to follow users and like quests to more easily access that content and show you enjoy it!


<img src="./app/assets/images/gifs/new-quest-create.gif" width=800 height=auto>

```
switch (modal) {
    case 'new-text':
    case 'new-image':
    case 'new-quote':
    case 'new-audio':
    case 'new-video':
      component = <NewQuestContainer type={formType} />;
      background = 'new-quest-background';
      container = 'new-quest-container';
      break;
    case 'usermenu':
      component = <UserMenu closeModal={closeModal}/>;
      background = 'user-menu-background';
      container = 'user-menu-container';
      break;
    case 'userpage':
      component = <UserPage authorId={event.target.id}/>;
      background = 'user-page-background';
      container = 'user-page-container';
      break;
    default:
      return null;
  }
  return (
    <div className={background} onClick={closeModal}>
      <div className={container} onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>)
```
The modal system uses a switch statement to ensure DRY code for both different types of post creation and different types of modal in general


-------------------------------------------

### Technologies

Adventr was built with:
* Front-End: React & Redux
* Back-End: Rails & PostgresSQL
* Media Content storage: AWS S3

