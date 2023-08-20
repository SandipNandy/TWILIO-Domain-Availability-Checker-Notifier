###############################################
# Author :- Sandip Nandi                      #
# Creation Date :- 27- feb-23                 #
# Address :- Bengalore, Karanataka            #
# Domain Availability Checker Notifier        #
#                                             #
###############################################

from twilio.rest import Client 
account_sid = 'ACc40eb1368aca104f3f07a3ddb223dd' 
auth_token = '464dac846608285d2307aef1d62b1' 
client = Client(account_sid, auth_token)
message = client.messages.create( 
                              from_='whatsapp:+14XXXXX',  
                              body='Your Twilio code is 13843',      
                              to='whatsapp:+91XXXXXXXX' 
                          ) 
 
print(message.sid);
//twilio message send.
