function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-zA-Z0-9-_.]/g, "")
    new_id = new_id.replace(/\.{2,}/g, ".")
    new_id = new_id.replace(/^\.|\.$/g, "") || "a"
    new_id = new_id.slice(0, 15).replace(/\.$/g, "")
    return new_id.length <= 2 ? new_id.concat(new_id[new_id.length - 1].repeat(3 - new_id.length)) : new_id;
}