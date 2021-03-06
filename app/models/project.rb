# == Schema Information
#
# Table name: projects
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  url            :string           not null
#  description    :text             not null
#  main_image_url :string
#  end_date       :string           not null
#  funding_goal   :integer          not null
#  details        :text
#  creator_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  category       :string
#

class Project < ApplicationRecord
  validates :title, :url, :description, :end_date, :creator_id, :category, presence: true
  validates :url, uniqueness: true
  validates :title, uniqueness: {scope: :creator_id}
  validates :funding_goal, numericality: true

  has_many :rewards
  has_many :backers, through: :rewards, source: :backers
  belongs_to :creator, foreign_key: :creator_id, class_name: 'User'
end
