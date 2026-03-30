-- Insert two users
INSERT INTO users (username, name, disabled, created_at, updated_at) VALUES
('user1@example.com', 'Joni Tonttu', false, NOW(), NOW()),
('user2@example.com', 'Jaana Saari', false, NOW(), NOW());

-- Insert two blogs for each user
INSERT INTO blogs (title, author, url, likes, year, user_id, created_at, updated_at) VALUES
('Jonin eka blogi', 'Joni Tonttu', 'https://example.com/joni-blog-1', 5, 2023, 1, NOW(), NOW()),
('Jonin toka', 'Joni Tonttu', 'https://example.com/joni-blog-2', 10, 2024, 1, NOW(), NOW()),
('Jaanan eka Blog', 'Jaana Saari', 'https://example.com/jaana-blog-1', 8, 2023, 2, NOW(), NOW()),
('Jaanan toka Blog', 'Jaana Saari', 'https://example.com/jaana-blog-2', 12, 2024, 2, NOW(), NOW());

-- Insert reading list entries
INSERT INTO reading_lists (user_id, blog_id, read, created_at, updated_at) VALUES
(1, 1, false, NOW(), NOW()),
(1, 2, true, NOW(), NOW()),
(2, 3, false, NOW(), NOW()),
(2, 4, true, NOW(), NOW());