-- * ENUMS
-- Subscription Statuses
CREATE TYPE subscription_status AS ENUM ('trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid', 'paused');
-- Pricing Types
CREATE TYPE pricing_type AS ENUM ('one_time', 'recurring');
-- Pricing Plan Intervals
CREATE TYPE pricing_plan_interval AS ENUM ('day', 'week', 'month', 'year');
-- Payment Method Types
CREATE TYPE payment_type AS ENUM ('acss_debit', 'affirm', 'afterpay_clearpay', 'alipay', 'au_becs_debit', 'bacs_debit', 'bancontact', 'blik', 'boleto', 'card', 'card_present', 'cashapp', 'customer_balance', 'eps', 'fpx', 'giropay', 'grabpay', 'ideal', 'interac_present', 'klarna', 'konbini', 'link', 'oxxo', 'p24', 'paynow', 'pix', 'promptpay', 'sepa_debit', 'sofort', 'us_bank_account', 'wechat_pay');

-- * TABLES
-- Customers (Private) - https://stripe.com/docs/api/customers
CREATE TABLE customers (
	-- The Learnly App User's UUID (auth.users)
	id uuid REFERENCES auth.users NOT NULL PRIMARY KEY,

	-- The Stripe Customer Id
	stripe_customer_id text NOT NULL DEFAULT '' UNIQUE,

	-- Email, Phone, Name, Shipping, Metadata, Address, Description (optional)

	-- Stripe Subscriptions
	subscriptions jsonb NOT NULL DEFAULT '{}',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Payment Method & Billing Details (Private) - https://stripe.com/docs/api/payment_methods
CREATE TABLE payment_and_billing_details (
	-- The Learnly App User's UUID (auth.users)
	id uuid REFERENCES auth.users NOT NULL PRIMARY KEY,

	-- The Stripe Payment Method Id
	stripe_payment_method_id text NOT NULL DEFAULT '',

	-- The Stripe Customer Id
	stripe_customer_id text NOT NULL DEFAULT '',

	-- The Stripe Payment Method Type
	payment_method_type payment_type NOT NULL DEFAULT 'card',

	-- The Stripe Card Brand
	card_brand text NOT NULL DEFAULT '',

	-- The Stripe Card Last 4
	last4 text NOT NULL DEFAULT '',

	-- The Stripe Card Expiration Month
	exp_month text NOT NULL DEFAULT '',

	-- The Stripe Card Expiration Year
	exp_year text NOT NULL DEFAULT '',

	-- The Stripe Billing Address Line 1
	billing_address_line1 text NOT NULL DEFAULT '',

	-- The Stripe Billing Address Line 2
	billing_address_line2 text NOT NULL DEFAULT '',

	-- The Stripe Billing City
	billing_city text NOT NULL DEFAULT '',

	-- The Stripe Billing State or State
	billing_state text NOT NULL DEFAULT '',

	-- The Stripe Billing Postal Code
	billing_postal_code text NOT NULL DEFAULT '',

	-- The Stripe Billing Country
	billing_country text NOT NULL DEFAULT '',

	-- The Stripe Billing Name
	billing_name text NOT NULL DEFAULT '',

	-- The Stripe Billing Email
	billing_email text NOT NULL DEFAULT '',

	-- The Stripe Billing Phone
	billing_phone text NOT NULL DEFAULT '',

	-- Is this the user's default payment method?
	default_method boolean NOT NULL DEFAULT false,

	-- Payment Details
	payment_details jsonb NOT NULL DEFAULT '{}',

	-- The Stripe Payment Method Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Subscriptions (Private) - https://stripe.com/docs/api/subscriptions
CREATE TABLE subscriptions (
	-- Subscription ID from stripe (sub_xxxxxxxxxxxxxx)
	id text NOT NULL PRIMARY KEY,

	-- The Learnly App User's UUID (auth.users)
	user_id uuid REFERENCES auth.users NOT NULL,

	-- Stripe Customer ID
	stripe_customer_id text NOT NULL DEFAULT '',

	-- Stripe Price ID
	stripe_price_id text NOT NULL DEFAULT '',

	-- Stripe Product ID
	stripe_product_id text NOT NULL DEFAULT '',

	-- Subscription Quantity
	quantity integer NOT NULL DEFAULT 1,

	-- Status of Subscription Object
	status subscription_status NOT NULL DEFAULT 'trialing',

	-- Stripe Subscription Description
	description text NOT NULL DEFAULT '',

	-- Subscription Items List - https://stripe.com/docs/api/subscriptions/object#subscription_object-items
	items jsonb NOT NULL DEFAULT '[]',

	-- Stripe Currency (3-Letter ISO Currency Code [lowercase])
	currency text NOT NULL DEFAULT 'usd' CHECK (char_length(currency) = 3),

	-- Stripe Default Payment Method ID
	default_payment_method_id text NOT NULL DEFAULT '',

	-- Stripe Cancel at Period End
	cancel_at_period_end boolean NOT NULL DEFAULT false,

	-- Stripe Subscription Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Time at which the subscription was created.
	created timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

	-- Start of the current period that the subscription has been invoiced for.
	current_period_start timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

	-- End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
	current_period_end timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

	-- If the subscription has ended, the timestamp of the date the subscription ended.
	ended_at timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- A date in the future at which the subscription will automatically get canceled.
	cancel_at timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will still reflect the date of the initial cancellation request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
	canceled_at timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- Stripe Cancellation Details
	cancellation_reason jsonb NOT NULL DEFAULT '{}',

	-- Stripe Collection Method
	collection_method text NOT NULL DEFAULT 'charge_automatically', -- 'charge_automatically' or 'send_invoice'

	-- If the subscription has a trial, the beginning of that trial.
	trial_start timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- If the subscription has a trial, the end of that trial.
	trial_end timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- Days Until Due
	days_until_due integer NOT NULL DEFAULT 0,

	-- Discount
	discount jsonb NOT NULL DEFAULT '{}',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Products (Public) - https://stripe.com/docs/api/products
CREATE TABLE products (
	-- Product ID from stripe (prod_xxxxxxxxxxxxxx)
	id text NOT NULL PRIMARY KEY,

	-- Stripe Product Active
	active boolean NOT NULL DEFAULT false,

	-- Product Name
	name text NOT NULL DEFAULT '',

	-- Product Description
	description text NOT NULL DEFAULT '',

	-- Product Image
	image text NOT NULL DEFAULT '',

	-- Product Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);


-- Prices (Public) - https://stripe.com/docs/api/prices
CREATE TABLE prices (
	-- Price ID from stripe (price_xxxxxxxxxxxxxx)
	id text NOT NULL PRIMARY KEY,

	-- Stripe Product ID
	stripe_product_id text NOT NULL DEFAULT '',

	-- Stripe Price Active
	active boolean NOT NULL DEFAULT false,

	-- Stripe Price Currency (3-Letter ISO Currency Code [lowercase])
	currency text NOT NULL DEFAULT 'usd' CHECK (char_length(currency) = 3),

	-- Stripe Price Description
	description text NOT NULL DEFAULT '',

	-- Stripe Price Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Stripe Price Nickname
	nickname text NOT NULL DEFAULT '',

	-- Stripe Price Type
	type pricing_type NOT NULL DEFAULT 'recurring',

	-- Stripe Price Recurring Interval
	recurring_interval pricing_plan_interval NOT NULL DEFAULT 'year',

	-- Stripe Price Recurring Interval Count
	recurring_interval_count integer NOT NULL DEFAULT 1,

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- * VIEWS
-- User Subscriptions View
CREATE VIEW user_subscriptions_view AS
SELECT c.id as user_id, s.id as subscription_id, p.name as product_name
FROM customers c
JOIN subscriptions s ON c.id = s.user_id
JOIN products p ON s.stripe_product_id = p.id;


-- * FUNCTIONS
-- Calculate Subscription End Date
CREATE FUNCTION calculate_subscription_end_date(start_date timestamp, interval, pricing_plan_interval, interval_count integer) RETURNS timestamp AS $$
DECLARE
    end_date timestamp;
BEGIN
    IF interval = 'day' THEN
        end_date := start_date + interval_count * INTERVAL '1 day';
    ELSIF interval = 'week' THEN
        end_date := start_date + interval_count * INTERVAL '1 week';
    ELSIF interval = 'month' THEN
        end_date := start_date + interval_count * INTERVAL '1 month';
    ELSE
        end_date := start_date + interval_count * INTERVAL '1 year';
    END IF;

    RETURN end_date;
END;
$$ LANGUAGE plpgsql;



-- * TRIGGERS
-- Enable Realtime listening on public tables
DROP PUBLICATION IF EXISTS supabase_realtime;
CREATE publication supabase_realtime for TABLE products, prices;


-- * INDEXES
-- N/A


-- * POLICIES (ROW LEVEL SECURITY)
-- RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_and_billing_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "User can only view their own subscription data" ON subscriptions for SELECT USING (auth.uid() = user_id);
CREATE POLICY "Products are read-only" ON products for SELECT USING (true);
CREATE POLICY "Prices are read-only" ON prices for SELECT USING (true);



