json.pokemon do
  json.merge! @poke.attributes
end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.merge! item.attributes
    end
  end
end
