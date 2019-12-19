export interface Chapter {
    _id: string,
    _rev: string,
    chapter_id: Number,
    story_id: string,
    chapter_title: string,
    chapter_content: string,
    candidates : [],
    choices: []
}
