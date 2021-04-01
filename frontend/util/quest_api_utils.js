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

export const addTagToQuest = (quests_tag) => {
  return $.ajax({
    method: 'POST',
    url: '/api/quests_tags',
    data: quests_tag,
    contentType: false,
    processData: false,
  });
};

export const removeTagFromQuest = (tagId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/quests_tags/${tagId}`,
    data: { tagId },
  });
};