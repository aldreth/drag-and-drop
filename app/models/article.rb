class Article < ActiveRecord::Base
  has_many :child_links, :class_name => "Link", :foreign_key => :parent_id
  has_many :children, :through => :child_links, :source => :child

  has_many :parent_links, :class_name => "Link", :foreign_key => :child_id
  has_many :parents, :through => :parent_links, :source => :parent
end
