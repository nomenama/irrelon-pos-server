# Irrelon Point-of-Sale Server

## Install
```bash
npm i
```

## Run
```bash
npm run dev
```

The server should now be available at: http://0.0.0.0:9010

## Query for All Merchants
GET http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant

## Query for one Merchant by ID
http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant/testMerchant

## Query for All Merchant Menus
http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant/testMerchant/menus

## Query for one Merchant Menu by ID
http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant/testMerchant/menus/testMenu
