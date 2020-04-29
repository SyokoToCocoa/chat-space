# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
<<<<<<< HEAD
|username|string|null: false|
=======
|name|string|null: false|
>>>>>>> origin/master
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
<<<<<<< HEAD
=======
- has_many :comments
>>>>>>> origin/master

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
<<<<<<< HEAD
|groupname|string|null: false|
=======
|name|string|null: false|

>>>>>>> origin/master

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
<<<<<<< HEAD

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|groups_id|integer|null: false|
|users_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments
- belongs_to :user
- belongs_to :group
=======
- has_many :comments

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: foreign_key: true|
|user_id|integer|null: foreign_key: true|

### Association

>>>>>>> origin/master

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
<<<<<<< HEAD
|text|text|null: false|
|image|string|null: false|
|groups_users_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :groups_users
=======
|text|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
>>>>>>> origin/master
