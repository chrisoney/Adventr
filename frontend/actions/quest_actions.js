import * as QuestApiUtils from '../util/quest_api_utils';

export const RECEIVE_ALL_QUESTS = 'RECEIVE_ALL_QUESTS';
export const RECEIVE_QUEST = 'RECEIVE_QUEST';
export const REMOVE_QUEST = 'REMOVE_QUEST';

export const receiveAllQuests = (quests) => ({
  type: RECEIVE_ALL_QUESTS,
  quests
});

export const receiveQuest = (quest) => ({
  type: RECEIVE_QUEST,
  quest
});

export const removeQuest = (questId) => ({
  type: REMOVE_QUEST,
  questId
});

export const fetchAllQuests = () => (dispatch) =>
  QuestApiUtils.fetchAllQuests().then((quests) =>
    dispatch(receiveAllQuests(quests))
  );

export const fetchSingleQuest = (questId) => (dispatch) =>
  QuestApiUtils.fetchSingleQuest(questId).then((quest) =>
    dispatch(receieveQuest(quest))
  );

export const createQuest = (quest) => (dispatch) =>
  QuestApiUtils.createQuest(quest).then((quest) => dispatch(receiveQuest(quest)));

export const updateQuest = (quest) => (dispatch) =>
  QuestApiUtils.updateQuest(quest).then((quest) => dispatch(receiveQuest(quest)));

export const deleteQuest = (questId) => (dispatch) => {
  return QuestApiUtils.deleteQuest(questId).then((quest) => dispatch(removeQuest(quest.id)))
}

export const addTagToQuest = (tagJoin) => (dispatch) => {
  QuestApiUtils.addTagToQuest(tagJoin);
};
export const removeTagFromQuest = (tagJoinId) => (dispatch) => {
  QuestApiUtils.removeTagFromQuest(tagJoinId);
};




