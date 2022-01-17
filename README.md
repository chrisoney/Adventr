### Live website

[Click here](https://adventr-app.herokuapp.com/?#/) to check out Adventr!

-------------------------------------------

# Adventr

<meta property='og:image' content='./app/assets/images/preview.jpg'/>

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
* Ability to associate both quests and users with tags to ease discovery of content users will enjoy
* Introduction of reblogs to show ownership of original content while allowing for transformative works

<img src="./app/assets/images/gifs/new-quest-create.gif" width=800 height=auto>

```javascript
switch (modal) {
  case 'new-text':
  case 'new-image':
  case 'new-quote':
  case 'new-audio':
  case 'new-video':
    component = <NewQuestContainer type={formType}/>;
    background = 'new-quest-background';
    container = 'new-quest-container';
    onClickEffect = closeModal;
    transparentBackground = <div className="test-background"></div>;
    break;
  case 'reblog-new':
    component = <NewQuestContainer type={quest.quest_type} quest={quest} reblogAction={reblogAction}/>;
    background = 'new-quest-background';
    container = 'new-quest-container';
    onClickEffect = closeModal;
    transparentBackground = <div className="test-background"></div>;
    break;
  case 'edit-quest':
    component = <EditQuestContainer
      type={quest.quest_type}
      quest={quest}
      reblogAction={reblogAction}
      model='Quest'
    />;
    background = 'new-quest-background';
    container = 'new-quest-container';
    onClickEffect = closeModal;
    transparentBackground = <div className="test-background"></div>;
    break;
  case 'edit-reblog':
    component = <EditQuestContainer
      type={quest.quest_type}
      quest={quest}
      reblog={reblog}
      reblogAction={reblogAction}
      model='Reblog'
    />;
    background = 'new-quest-background';
    container = 'new-quest-container';
    onClickEffect = closeModal;
    transparentBackground = <div className="test-background"></div>;
    break;
  case 'avatar':
    component = <AvatarContainer />;
    background = 'new-avatar-background';
    container = 'new-avatar-container';
    onClickEffect = closeModal;
    break;
  case 'usermenu':
    component = (
      <UserMenu openModal2={openModal2} closeModal={closeModal} />
    );
    background = 'user-menu-background';
    container = 'user-menu-container';
    onClickEffect = null;
    break;
  case 'userpage':
    component = <UserPage authorId={event.target.id} />;
    background = 'user-page-background';
    container = 'user-page-container';
    onClickEffect = userPageClose;
    break;
  case 'new-quest-selector':
    component = <NewQuestSelector />;
    background = 'quest-selector-background';
    container = 'quest-selector-container';
    onClickEffect = closeModal;
    break;
  default:
    return null;
}
return (
  <>
    {transparentBackground}
    <div className={background} onClick={(e) => onClickEffect(e)}>
      <div className={container} onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  </>
);
```

The modal system uses a switch statement to ensure DRY code for both different types of post creation and different types of modal in general

-------------------------------------------

### Technologies

Adventr was built with:

* Front-End: React & Redux
* Back-End: Rails & PostgresSQL
* Media Content storage: AWS S3
