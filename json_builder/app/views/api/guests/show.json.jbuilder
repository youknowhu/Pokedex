json.partial! 'api/guests/guest', guest: @guest

json.gifts @guest.gifts.pluck(:title, :description)
