class Link < ActiveRecord::Base
  belongs_to :parent, :class_name => "Article"
  belongs_to :child, :class_name => "Article"

  scope :by_site, lambda {|child| where(:child_id => child) }

end
