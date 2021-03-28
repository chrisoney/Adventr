export const fetchAllQuests = () =>
  $.ajax({
    method: 'GET',
    url: '/api/quests'
  });

export const fetchSingleQuest = (questId) =>
  $.ajax({
    method: 'GET',
    url: `/api/quests/${questId}`
  });

export const createQuest = (quest) =>
  $.ajax({
    method: 'POST',
    url: `/api/quests`,
    data: quest,
    contentType: false,
    processData: false
  });


export const updateQuest = (quest) => {
  return $.ajax({
    method: 'PUT',
    url: `/api/quests/${quest.get("quest[id]")}`,
    data: quest,
    id: quest.get("quest[id]"),
    contentType: false,
    processData: false
  });
}

export const deleteQuest = (questId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/quests/${questId}`
  });
};


export const addTagToQuest = (questId, tag) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users_tags',
    data: { questId, tag },
  });
};

export const removeTagFromQuest = (quests_tag) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users_tags/${quests_tag.get('quests_tag[id]')}`,
  });
};