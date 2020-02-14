delete from houses
where id = $1
returning *;
