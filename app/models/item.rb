class Item
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name,       :type => String
  field :type,       :type => String
  field :template,   :type => Moped::BSON::ObjectId
  field :folser,     :type => Boolean
  field :objects,    :type => Array

  validates_presence_of :name
  validates_presence_of :type
  validates_presence_of :template

  embedded_in :template
end