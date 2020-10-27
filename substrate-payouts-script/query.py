#python2.7

import requests
import json

def prompt_user_details():
	print('Welcome to the payout tracker')
	print('....')
	print('Enter your stash address')

	accountID = raw_input("Enter your address: ")
	depth = raw_input('Enter pending rewards era window:')
	return accountID, depth

def query_payouts(accountID,depth):
	requestURL = "http://127.0.0.1:8080/accounts/" + accountID +"/staking-payouts?depth="+str(depth)+"&unclaimedOnly=true"
	r = requests.get(requestURL)
	json_object = json.loads(str(r.content))
	
	return json_object

def calculate_payouts(payoutsJSON):
	totalPayout = 0

	for era in payoutsJSON['erasPayouts']:
		for validator in era['payouts']:
			totalPayout += int(validator['nominatorStakingPayout'])

	kusama_decimals = 10000000000
	totalPayout /= kusama_decimals
	
	return totalPayout
	
accountID, depth = prompt_user_details()
payout_details = query_payouts(accountID,depth)
totalPayout = calculate_payouts(payout_details)

print('You have ' + str(totalPayout)  + ' KSM pending withdrawal' )