#DB設計

##テーブル
messages
users
groups
user_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|index|
|image|string|

|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

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
- has_many: groups, through: :user_groups
- has_many: user_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many: messages


### user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

