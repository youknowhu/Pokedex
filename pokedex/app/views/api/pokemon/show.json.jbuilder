json.pokemon do
  json.extract! @poke, :id, :name, :poke_type, :attack, :defense, :moves
  json.image_url asset_path(@poke.image_url)
end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.merge! item.attributes
    end
  end
end
