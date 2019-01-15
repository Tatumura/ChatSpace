<<<<<<< HEAD
##DB設計
=======
#DB設計
>>>>>>> origin/master

##テーブル
messages
users
groups
<<<<<<< HEAD
members
=======
user_groups
>>>>>>> origin/master

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|index|
|image|string|
<<<<<<< HEAD
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
=======
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
>>>>>>> origin/master

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false|
|password|string|null: false|

### Association
- has_many: messages
<<<<<<< HEAD
- has_many: groups
- has_many: menbers
=======
- has_many: groups, through: :user_groups
- has_many: user_groups
>>>>>>> origin/master


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many: messages
<<<<<<< HEAD
- has_many: members
- has many: users

### membersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
=======
- has_many: user_groups
- has many: users, through: :user_groups

### user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
>>>>>>> origin/master

### Association
- belongs_to :group
- belongs_to :user
