class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         def as_json(options={})
          { id: id, name: display_name, gravatar: gravatar }
         end

  def display_name
    first_name.present? ? "#{first_name} #{last_name}" : email
  end

  def gravatar
    hash = Digest::MD5.hexdigest(email)
    "http://www.gravatar.com/avatar/#{hash}"
end
end
