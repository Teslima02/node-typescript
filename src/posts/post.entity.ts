import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column('text',{nullable:true})
  public title: string;
 
  @Column('text',{nullable:true})
  public content: string;
}
 
export default Post;