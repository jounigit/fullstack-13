-- Insert two users
INSERT INTO users (username, name, created_at, updated_at) VALUES
('user1@example.com', 'Joni Tonttu', NOW(), NOW()),
('user2@example.com', 'Jaana Saari', NOW(), NOW());

-- Insert two blogs for each user
INSERT INTO blogs (title, author, url, likes, user_id) VALUES
('Jonin eka blogi', 'Joni Tonttu', 'https://example.com/joni-blog-1', 5, 2),
('Jonin toka', 'Joni Tonttu', 'https://example.com/joni-blog-2', 10, 2),
('Jaanan eka Blog', 'Jaana Saari', 'https://example.com/jaaana-blog-1', 8, 3),
('Jaanan toka Blog', 'Jaana Saari', 'https://example.com/jaana-blog-2', 12, 3);