json.key_format! camelize: :lower


@users.each do |user|
  json.set! user.id do
    json.extract! user, :name, :id
  end
end
