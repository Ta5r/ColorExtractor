# RabbitMQ Microservice Architecture for Order Placement and Notifications

##Description:

In my project, I utilized RabbitMQ to implement a microservice architecture for order placement and notification handling. The system consisted of two independent services: the Order Placement Service and the Notification Service. The Order Placement Service published order messages to a RabbitMQ exchange, which then delivered them to subscribed consumers, including the Notification Service. The Notification Service processed the messages and sent notifications to customers via various channels. Leveraging RabbitMQ's message queuing capabilities enabled scalable and asynchronous communication between the services, ensuring fault tolerance and reliable message delivery in a distributed environment.
