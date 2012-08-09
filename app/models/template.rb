class Template
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name,   :type => String
  field :items,  :type => Array

  validates_presence_of :name

  belongs_to  :user
  embeds_many :item

end