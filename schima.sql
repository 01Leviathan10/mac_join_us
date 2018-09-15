CREATE TABLE users
(
    email VARCHAR(255) PRIMARY KEY,
    crated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (email) VALUES
('Kate34@yahoo.com'),
('Tunde@gmail.com');

INSERT INTO users (email, crated_at) VALUES
('dusty@gmail.com', 'Mon Apr 24 2017 17:10:07 GMT+0000 (UTC)');



