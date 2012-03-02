class Link < ActiveRecord::Base
  belongs_to :parent, :class_name => "Article"
  belongs_to :child, :class_name => "Article"
end
