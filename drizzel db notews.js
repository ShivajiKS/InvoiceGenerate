/*
- select() : it is used to specify the cloumns of the table. it can be either all column or sepecific columns.

-Select with all columns(All columns) : db.select().from(users)

- specific columns : db.select({field1: users.id,field2: users.name,}).from(users)


- If you have an expression you use frequently, you can extract it into a function:
example :
        import type { Column } from 'drizzle-orm';
        import { sql } from 'drizzle-orm';
        function lower(col: Column) {
        return sql<string>`lower(${col})`;
        }
        const result = await db.select({
        id: users.id,
        lowerName: lower(users.name),
        }).from(users);

Conditional select : You can have a dynamic selection object based on some condition.
    example :
        async function selectUsers(withName: boolean) {
        return db
            .select({
            id: users.id,
            ...(withName ? { name: users.name } : {}),
            })
            .from(users);
        }
        const users = await selectUsers(true)

Filtering : 
    import { eq, lt, gte, ne } from 'drizzle-orm';
    await db.select().from(users).where(eq(users.id, 42));
    await db.select().from(users).where(lt(users.id, 42));
    await db.select().from(users).where(gte(users.id, 42));
    await db.select().from(users).where(ne(users.id, 42));


All the values provided to filter operators and to the sql function are parameterized automatically.

    For example, this query:  await db.select().from(users).where(eq(users.id, 42));
    will be translated to:  select "id", "name", "age" from "users" where "id" = $1; -- params: [42]

Combining filters(more than one filters) :
   
    and : await db.select().from(users).where(
    and(
        eq(users.id, 42),
        eq(users.name, 'Dan')
    ));

      (or) 

    await db.select().from(users).where(sql`${users.id} = 42 and ${users.name} = 'Dan'`);

    or : await db.select().from(users).where(sql`${users.id} = 42 or ${users.name} = 'Dan'`);






insert : 
    single row :  await db.insert(users).values({ name: 'Andrew' });

    multiple rows : await db.insert(users).values([{ name: 'Andrew' }, { name: 'Dan' }]);

    
    
*/
