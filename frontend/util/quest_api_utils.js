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

export const addTagToQuest = (tag_join) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tag_joins',
    data: tag_join,
    contentType: false,
    processData: false,
  });
};

export const removeTagFromQuest = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tag_joins/${id}`,
    data: { id },
  });
};